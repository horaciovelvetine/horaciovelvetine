# Graphs, the J.U.N.G. (Java Universal Network Graph) Library, and YOU

- [ ] Insert AI generated Uncle Sam-esque recruitment "YOU" poster image

This document and codebase are only a summary of the research done in the course of this project, if you're interested in reading there is a [reference handbook](docs/../references/graphs_handbook_full/0_contents.pdf) which does a tremendous job summarizing about every piece of Graph Theory out there. [Chapter 12: Force Directed Graphs](dev/../references/graphs_handbook_full/12_force-directed.pdf) is the chapter relevant to the rest of this doc, and was written by [Stephen G. Kobourov](https://scholar.google.com/citations?user=P21gHIkAAAAJ&hl=en) a widely cited and recognized expert in the field.

## Force Drawn Graphs & The Fruchterman-Reingold Algorithm
Force Drawn Graph layout algorithims take inspiration from real life physical systems, and use them as a means of solving for a practical solution to the layout generation problem. Imagining a graph as ["a system of springs connecting steel rings"](docs/../references/1201.3011v1.pdf) conceptualizes a system constantly trying to find a best position for each ring (node). Then using physical law's and constants like [Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law) or [Coulomb's Law](https://en.wikipedia.org/wiki/Coulomb%27s_law) to give numerical significane to the forces happening at each spring (`Edge`), this suddenly becomes a very (big) recursive math problem.

The above summary does a lot to smooth over huge intellectual accomplishments in the field of Graph Theory. [W.T. Tutte's](https://en.wikipedia.org/wiki/W._T._Tutte) early work on Graph layouts very much mirror the initial ideation of a layout which started this app. [Finding Centroids](https://github.com/horaciovelvetine/finding-centroids) is a visualization of the exact concept Tutte used, and [the Weighted Average Layout Readme](docs/../WEIGHTED_AVERAGE_LAYOUT.md) includes a java implementation and explanation as well. [Peter Eades](https://en.wikipedia.org/wiki/Peter_Eades) brought the "Spring Embedder" model to help minimize crossover in edges and leveraged physical force based modelling to more naturally and evenly disperse nodes.

The most relevant of these contributions are those of Fruchterman-Reingold, namely the primary algorithm implemented in this application. Borrowing from the physical phenomenon of [annealing](https://en.wikipedia.org/wiki/Annealing_(materials_science)), they implemented a 'cooling' which helps limit node movement as the layout iterates to help reach a more stable solution.

The below example is written to highlight and outline the flow of how this algorithm goes about finding a solution:

## Java Fruchterman-Reingold Example
```java
import java.awt.geom.Point2D;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class FruchtermanReingoldLayout {
    private Map<Integer, Point2D> positions;
    private double width;
    private double height;
    private Random random = new Random();

    public FruchtermanReingoldLayout(double width, double height) {
        this.width = width;
        this.height = height;
        positions = new HashMap<>();
    }

    public void initializePositions(int[] nodes) {
        for (int node : nodes) { // nodes are initialized randomly, the 'big bang'
            double x = random.nextDouble() * width;
            double y = random.nextDouble() * height;
            positions.put(node, new Point2D.Double(x, y));
        }
    }

    public void layout(int[] nodes, int[][] edges, int iterations) {
        double area = width * height;
        double k = Math.sqrt(area / nodes.length); // force scaling factor based on total space available
        double t = width / 10; // Initial temperature

        for (int it = 0; it < iterations; it++) {
            Map<Integer, Point2D> displacement = new HashMap<>(); // stores all the calculated movement coords
            
            for (int v : nodes) { // calculate node displacements - the repulsive force between the nodes themselves
                Point2D disp = new Point2D.Double(0, 0);
                for (int u : nodes) {
                    if (u != v) {
                        Point2D posV = positions.get(v);
                        Point2D posU = positions.get(u);
                        double dx = posV.getX() - posU.getX();
                        double dy = posV.getY() - posU.getY();
                        double distance = Math.sqrt(dx * dx + dy * dy);
                        double force = k * k / distance;
                        disp.setLocation(disp.getX() + (dx / distance) * force, disp.getY() + (dy / distance) * force);
                    }
                }
                displacement.put(v, disp);
            }

            for (int[] edge : edges) { // calculate edge displacements - the attractive foce acting bringing related nodes together
                int v = edge[0];
                int u = edge[1];
                Point2D posV = positions.get(v);
                Point2D posU = positions.get(u);
                double dx = posV.getX() - posU.getX();
                double dy = posV.getY() - posU.getY();
                double distance = Math.sqrt(dx * dx + dy * dy);
                double force = distance * distance / k;
                Point2D dispV = displacement.get(v);
                Point2D dispU = displacement.get(u);
                dispV.setLocation(dispV.getX() - (dx / distance) * force, dispV.getY() - (dy / distance) * force);
                dispU.setLocation(dispU.getX() + (dx / distance) * force, dispU.getY() + (dy / distance) * force);
                displacement.put(v, dispV);
                displacement.put(u, dispU);
            }

            for (int v : nodes) { // applying displacements to correlated nodes
                Point2D disp = displacement.get(v);
                Point2D posV = positions.get(v);
                double dx = disp.getX();
                double dy = disp.getY();
                double distance = Math.sqrt(dx * dx + dy * dy);
                double limitedDist = Math.min(distance, t);
                posV.setLocation(posV.getX() + (dx / distance) * limitedDist, posV.getY() + (dy / distance) * limitedDist);
                positions.put(v, posV);
            }

            t *= 0.95; // Cool down, thanks Fruchterman-Reingold!
        }
    }
}

```
## JUNG Layouts's's
Inside the [JUNG Library](https://github.com/jrtom/jung) there are two different implementations of the Fruchterman-Reingold layout algorithm. In examining these algorithims there's an opportunity to explore some Google (adjacent) code, test the differences, and get into the weeds of theorized code choices (making things up). First there are a few confusing details to iron out here on which number is what, what the implementations do differently, and how the Fruchterman-Reingold layout algorithm actually works. 

Fundamentally a set of vertices (which are instantiated with random `Point2D`'s) are iterated over, compared to each other vertex in the set where:
1) A new hash is created to store a set of displacement's (represented as 2D Point's themselves) to accumulate the total offset for each point through each step.
2) A constant repulsive force (which acts proportional to each vertices distance apart) displacement is calculated for each `Vertex` and each other `Vertex` in the set, and stored in the displacements. This is the layout part of the layout process - spreading vertices out across the provided `Dimensions` filling the space 'evenly'.
3) A repulsive force is then calculated between each `Vertex` which is connected by an `Edge`. This is what fundamentally groups related data, and helps to minimize the overall energy in a layout. Again, iteratively these forces are calculated and then accumulated on the displacements hash.
4) Finally each node is moved according to the accumulated displacements stored, and its position is updated in the layout. 


## Extending the Fruchterman-Reingold Algoritihm into 3D
Originally doing research for libraries to dissect in working with Graph's the [JUNG project](https://github.com/jrtom/jung) stood out as an interesting place to start. Firstly, there are "two" JUNG's, a previous iteration of the project still [publically available on Sourceforge](https://jung.sourceforge.net/) - and the current "2.1" release which is actively maintained. Interestingly there are [hints in the docs](https://jung.sourceforge.net/doc/api/index.html) (see: `jung.algorithms.layout3D`) of the previous release that there were potentially efforts in place to extend the Layout interface(s) to work with 3 dimensional layouts.

Typically graph visualization layout's aren't done in 3D for a few reasons: less visually understandable, additional compute expense which doesnt 'improve' the result, and the increase in system (client-side) requirements to render 3D graphics. (*i.e. is expensive*)

In an effort to take this torch, and implement it in this application - it's crucial to understand a few details about how these layouts are written.

## The Google-phant in the Room
The JUNG codebase inherits and uses the [guava](https://github.com/google/guava) heavily - so starting at the (ha!) [Wiki](https://github.com/google/guava/wiki) is probably an important first step. Functionally each layout in the library start by extending `Function<V, Point2D>`, requiring the implementation of an `apply(F input) => <T>` method, or, "A function which, provided a `Vertex` object `V` return the correlated `Point2D` coordinates. 

Given the inheritence structure extending these algorithims to 3D would require a fundamental rewrite and possible inclusion (or creation) of a `Point3D` class - something not included anywhere in the `import java.awt.geom.*;` library. Of course some quick research will show there are alternatives like: `import javafx.geometry.Point3D`, but given the histroy of the library and the chaotic nature of 3D layouts, I imagine the pro's and con's were discussed and subsequently sidelined for 2.1's release and transfer.

Given the low hanging fruit this application extends the 2D awt version in `Point3D` class [here](../src/main/java/edu/ForceDrawnGraphs/jung/Point3D.java) - inheriting and adding methods for a Z axis. With that done, the last next step is understanding and extending a `Layout` itself.

## Duplicate Caches?

The `AbstractLayout` method is inherited by each of the layout algorithm and uses a `LoadingCache<V, Point2D>` to store location data for each of the vertices. However, as each solution is looked at a little more closely it begins to appear that each algorithm initializes it's own secondary cache, and in the case of the `FRLayouts` even opting to use the exact same `LoadingCache<V, Point2D>` under the `frVertexData` label. 

Inside the various methods used to build a layout, you can even see them being seperately referenced in the same equation... 

```java
    protected synchronized void calcPositions(V v) { //FRLayout excerpt..
        FRVertexData fvd = getFRData(v); // references FRLayouts - frVertexData
        if(fvd == null) return;
        Point2D xyd = apply(v); // references AbstractLayouts - locations
        double deltaLength = Math.max(EPSILON, fvd.norm());

        double newXDisp = //calc... apply cumulative delta change using xyd
        double newYDisp = //calc... same as newXDisp

        double borderWidth = // define acceptable border limits
        double newXPos = // check if pos violates border, correct and dither edge positions
        double newYPos = //calc... sams as newXPos
        
        xyd.setLocation(newXPos, newYPos); // but, update only the locations point data?
    }
``` 

Iterable solutions rely on a second store to persist the offset calculations accumulated through each iterative loop, being reset each iteration back to the origin. A bit more poking around in a very related layout `KKLayout` which uses distance matrix (`private double[][] dm;`) to handle the exact same need of persiting data in a second place. 

The `step()` method consists of three main function calls while calculating a full iteration: `calcRepulsion(V v) => calcAttraction(E e) => calcPosition(V v)` with the logical flow following that order. Resetting each vertice's offset position to (0,0) happens in `calcRepulsion(V v)` ending when that offset is used and applied inside of `calcPosition(V v)`. 

## FRLayout vs. FRLayout2: Differences Summarized
  - `FRLayout2` implements handling frozen nodes differently from `FRLayout`, where the first implementation will skip updating pair's that are frozen, `FR2` allows for this one sided relationship by compensating in the calculated change for the unfrozen node. This happens across a few of the methods: `calcPositions() calcAttractions() calcRepulsion()`. From the comments and any reading that could be found, this may improve the overall accuracy and visual appearance of the resultant layout - but it is not clear just from reading. Heat-mapping the process and running each - it appears this *may* have the effect of not exiting early on adjustments which could be made which may lead to a validly stable solution earlier. 
  - `FR2` includes some movement constraint logic to limit 'big' jumps in the `calcPositions()` method, given the above optimization it seems these two almost act to balance each others effects across the algorithims methods. 
  - Small changes are made to the way boundaries, and boundary checking are handled. The includsion of a `Rectangle2D innerBounds` at the class variable level provides a class wide access to a means of checking boundaries haven't been exceeded by any member of the layout - possibly an improvement in not looking this up inside the heavily called `calculateOffset()` method.
  - The inclusion of a `FRVertexData` class inside of `FRLayout` while `FR2` opts for a simpler implementation and data structure w/o the helpers for normalizing and offsetting, which is likely an optimization (not having to instantiate POJO's for primitive data is a pretty common approach). 

I ran some tests varying the size of Graph from 100 Nodes & 2000 Edges, up to 1500 Nodes & 190,000 Edges (approx.), and didn't find any tremendouse difference in performance gains between the implementations. The small but insignificant performance gain trend emerged as the Graph size increased, but the inconsistency in improvements don't provide any confidence the tests were even a valid test. The working hypothesis is this is due to my compute limitations.

- [Sidenote: on Github](https://github.com/jrtom/jung/blob/master/jung-algorithms/src/main/java/edu/uci/ics/jung/layout/algorithms/FRBHVisitorLayoutAlgorithm.java) there appears to be a completely different Barnes-Hut Quadtree optimized version existing under the `FRBHVisitorLayoutAlgorithm.java` class. It is definitley worth the look, with mostly minimal changes to the `calcReupulsion()` method, but it's unclear if this has actually been made available in the libraries 2.1 release.
- [The 2.1.1 docs](https://jrtom.github.io/jung/javadoc/index.html?overview-summary.html) reference a `FRLayout` and `FRLayout2` - this matches with my import and use of the library inside the project so is the source code examined here.

## Anything JUNG Can Do, I Try To Do Better

[FRLayout3D](../src/main/java/edu/ForceDrawnGraphs/jung/FRLayout3D.java) is the final result of extending the above algorithim into 3D. Obviously with adding the additional calculations the concern is overhead and additional time to compute a valid layout. A series of tests were run timing how quickly each algorithim could reach a valid solution given the same dataset. The data for these tests can be found in the `./resources` directory, as 'Building layout Speed Testing Data', but the methadolgy was pretty straightforward.

Across 60 runs with ~150 vertices & ~2000 edges ( a typical dataset for this application at time of testing ) average runtimes were:

- `FRLayout` :: 69ms 
- `FRLayout2` :: 57ms
- `FRLayout3D` :: 87ms

Clearly the Layout2 was on to something (it's worth noting that `FRLayout3D` does steal a few of these approaches in it's implementation), but at a baseline - adding sub 20ms to do effectively an extra ~35ms worth of calculations is a great place to start from. However as the title alludes, the optimization process was not a particularly fruitful one (I think those JUNG contributors might be really great engineers, someone should hire those guys). 

1) [Adaptive Cooling](../src/main/java/edu/ForceDrawnGraphs/jung/layouts/FR3DAdaptiveCooling.java) : Implements a change to the way which temperature is adjusted through iterations, allowing each step to subtly adjust the cooling factor to prevent a solution from getting stuck in an early but bad solution. The linear nature of cooling limits vertices ability to make larger adjustments - through testing (similarly 60 runs), this modification had no performance gain or loss, instead providing a noticeable consistency across runs. The `FrLayout3D` sees occasional outlier times into 120ms plus, with `FR3DAdaptiveCooling` never venturing into the 100ms mark. These reuslts make this an easy add to the final application.
2) [Cache-ing Distances](../src/main/java/edu/ForceDrawnGraphs/jung/layouts/FR3DCacheDistances.java) : Implements another cache store for the results of the distance calculations done during each iteration. Through each iteration one of the pain-points is the actual calculation of the distance between each point, and this calculation is done twice (attraction and repulsion loops) for each set of vertices. By creating a cache (similar to the offset struct detailed above) where this value can be stored, it wouldn't have to be done twice. However, this optimization fights *the other* major performance problem, lookup times. Looking up the data for a particular vertex is as costly or more at this dataset size, averaging a more than 50ms increase in average time to run. 
3) [Cache-ing Cooling](../src/main/java/edu/ForceDrawnGraphs/jung/layouts/FR3DCachedCool.java) : Same as above, and suffers the same issue as above. 
4) [Executor Services](../src/main/java/edu/ForceDrawnGraphs/jung/layouts/FR3DExecutorService.java) : looked to leverage multi-threading to execute both the attraction and repulsion calculations in paralell, but I ran out of the (self) allotted time budget for exploring optimizations, and early indications on this approach were not good.

At the end of this process, adding adaptive cooling is an easy choice given it's a no-cost only improvement change to pair with the admission that I've got a lot to learn, and not enough time to do it. 

## References

- Fruchterman-Reingold : plaintext copy, I have never actually typed that.
- [Googles Caches Explained](https://github.com/google/guava/wiki/CachesExplained)
- [Graph Drawing by Force Directed by Force-Directed Placement: Fruchterman-Reingold](docs/../references/Graph%20Drawing%20by%20Force%20Directed%20Placement.pdf)
- [Graphs Explained (by the Guava Team)](https://github.com/google/guava/wiki/GraphsExplained#choosing-the-right-graph-type)
- [FADE: Graph Drawing Clustering, and Visual Abstraction by Aaron quigley and Peter Eades](docs/../references/Fade-2000-aquigley.pdf)
- [Graph: an Overview Complete Handbook](docs/refe/graphs_handbook_full)
- [Force-Directed Graph Drawing Using Social Gravity and Scaling by Michael J. Bannister, David Eppstein, Michael T. Goodrich, Lowell Trott](docs/../references/1209.0748v1.pdf)
- [JUNG2 2.0 API Documentation (deprecated)](https://jung.sourceforge.net/doc/api/index.html): *contains some functionality not carried into 2.1*
- [JUNG2 2.1 API Documentation](https://jrtom.github.io/jung/javadoc/overview-summary.html)
- [Abstract Layout Docs](https://jrtom.github.io/jung/javadoc/edu/uci/ics/jung/algorithms/layout/AbstractLayout.html): *All Layouts inherit this - good place to start in the docs*
- [The Origins of Graph Theory](https://carolinabento.medium.com/the-origins-of-graph-theory-20d5c5dfda1) *fun historic context*
- [Xcel Data and testing results](./resources/)


