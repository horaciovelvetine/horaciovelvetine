AcceptedTags = ["dl", "dt", "meta", "html", "p"]
## Helper methods for importing bookmarks for testing
digest_element = lambda do |element|
  doc.children.each do |child|
    if !AcceptedTags.include?(child.name) ##? invalid tag name 
      binding.pry
    elsif child.children.length > 1 ##? catches for recursive nodes
      binding.pry
    elsif his[:prev_element] == false ##? First node exception
      puts "First Node Exception"
      his[:prev_element] = {name: "first_execption_ele", child: child}
    elsif child.name == "dl" ##? Increase postition by 1
      his[:pos][his[:pos].length-1] += 1
    elsif child.name == "p" ##? Decrease position -1 for consecutive repeating "P" elements
      his[:prev_element].name == "a" ? his[:pos][his[:pos].length-1] -= (1 + his[:prev_depth]) : true
      binding.pry
    elsif child.name == "dt" ##? Adds new column to position 
      his[:prev_element].name == "p" ? his[:pos] << 0 : true
      
      if child.children.first.name ##? ELEMENT INFO SETUP  
        @ele = child.children.first
        if @ele.name == "h3" ##tag
          store[:tag_info] << {name: @ele.children.first.text.downcase.strip, position: his[:pos] }
        else ##link
          binding.pry
          store[:link_info] << {name: @ele.attributes["name"], href: @ele.attributes["href"],  position: his[:pos]}
        end
        binding.pry
      else ##? Element info exception catch
        puts "Add Element Info Exception!"
        binding.pry
      end
    end
    

    
    ##? ADDS TO DEPTH FOR REPEATING ELEMENTS, AND RESETS DEPTH NON REPEATING
    if his[:prev_element] == child 
      his[:prev_depth] += 1
      his[:prev_element] = child
    else
      his[:prev_depth] = 0
      his[:prev_element] = child
    end
    binding.pry

  end
end
get_bookmarks_from_doc = lambda do |admin, contexts, tags, digest_element|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  his = {pos: [0], prev_element: false, prev_depth: 0 } 
  store = { link_info: [],  tag_info: [] } 
  
  
  doc.children.each do |child|
    binding.pry
    digest_element.call(child)
  end

  binding.pry
end

## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

## /config/initializers/object_config.yml for list 
contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

get_bookmarks_from_doc.call(admin, contexts, tags, digest_element)

##! GOALS
  # links = formatted_links.map { |link| Link.create!(link.info)}






