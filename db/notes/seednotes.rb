
  
  
  ## Build out some skip dictionaries? 
  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")

  ##RULES:
  ## --> dl: "increase current value of score by 1",
  ## --> p: "if prev == 'a' then decrease current value of score by 1"
  ## --> p: "if prev == 'p' then check next value of prev"
  ## --> dt: "if prev == 'p' then push new 0 to array" (signifies a "max" for that axis of x values) then should check for tag or link digest

##! GOALS
  # links = formatted_links.map { |link| Link.create!(link.info)}
##! currently the loop runs into an issue of ordering when doing the recursion. Even though the Dt tag @ the first "folder" ("dev") is increasing the score, because the dev tag isnt being added first its mistakenly adding that value to the previous "folder" ("bookmarks bar"). Possible solution would be approaching each dt/dl so that they modify the cur_positioning still. But then inside of the get_bookmarks at ##! FUTURE JAMES LOOK HERE, pull apart their component pieces there. 

# handle_nested_node = lambda do |node, cur_position, store, handle_nested_node|
#   @re_handle_nested_node = handle_nested_node
#   @node_pos = cur_position[:pos]
#   non_info_nodes = ["text", "p", "dl", "dt", "meta"]
  
#   node.children.each do |child|
#     if non_info_nodes.include?(child.name)
#       true
#     elsif child.name =="h3"
#       store[:tag_info] << {name: child.children.text.downcase.strip, position: @node_pos} 
#     elsif child.name =="a"
#       store[:link_info] << {name: child.attributes["name"], href: child.attributes["href"], position: @node_pos}
#     elsif child.children.length > 1 && child.children.last.name != "text"
#       binding.pry
#       handle_nested_node(child, cur_position, store, @re_handle_nested_node)
#     end
#     puts " => #{child.name} node handled <="
#     binding.pry
#   end
# end

# get_bookmarks_from_doc = lambda do |admin, contexts, tags, handle_nested_node|
#   valid_nodes = ["dl", "dt", "meta", "html", "p", "text", "h3", "a"]
#   doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
#   cur_position = {pos: [0], prev_depth: 0, prev_node: false } 
#   store = { link_info: [],  tag_info: [] } 
  
#   ##? MAIN initial doc digest
#   doc.children.each do |child|
#     if !valid_nodes.include?(child.name) || cur_position[:prev_node] == false ##? Catches exceptions & errors 
#       if cur_position [:prev_node] == false
#         cur_position[:prev_node] = {name: "First Element Excluded!", child: child}
#       else
#         puts "Invalid Node Name Found"
#         binding.pry
#       end
#     end

#     ##? Traks and updates cur_position for info creation
#     if child.name == "p" 
#       if cur_position[:prev_node][:name] ##jumps over first exception not being a noko obj
#         true
#         puts "first node exception"
#       elsif cur_position[:prev_node].name
#         cur_position[:pos][cur_position[:pos].length-1] -= (1 + cur_position[:prev_depth])
#       end
#     elsif child.name == "dl" 
        ##! FUTURE JAMES LOOK HERE
#       # cur_position[:pos][cur_position[:pos].length-1] += 1
#     elsif child.name == "dt" 
        ##! FUTURE JAMES LOOK HERE
#       cur_position[:prev_node].name == "p" ? cur_position[:pos] << 0 : true
#     else
#       puts "The Uh-Oh perimeter has been breached. All hands on Desk. Man your Workstations."
#       binding.pry
#     end
    
#     ##? catches nested nodes
#     if child.children.length > 1 && child.name != "text" 
#       handle_nested_node.call(child, cur_position, store, handle_nested_node)
#     end


#   ##? Tracks depth for repeating elements
#     if cur_position[:prev_node] == child 
#       cur_position[:prev_depth] += 1
#       cur_position[:prev_node] = child
#     else
#       cur_position[:prev_depth] = 0
#       cur_position[:prev_node] = child
#     end
  
#   puts (store)
#   puts (cur_position)
#   sleep 1.0
  
#   end
# end
# get_bookmarks_from_doc.call(admin, contexts, tags, handle_nested_node)