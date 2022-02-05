AcceptedTags = ["dl", "dt", "meta", "html", "p", "text", "h3", "a"]
## Helper methods for importing bookmarks for testing
handle_nested_node = lambda do |node, cur_position, store, handle_nested_node|
  @re_handle_nested_node = handle_nested_node
  node.children.each do |child|
    if child.children.length > 1
      binding.pry
      # handle_nested_node(child, cur_position, store, handle_nested_node)
    elsif child.name =="h3"
      store[:tag_info] << {name: child.children.text.downcase.strip, cur_position: cur_position[:pos]}
    elsif child.name =="a"
      store[:link_info] << {name: child.attributes["name"], href: child.attributes["href"], cur_position: cur_position[:pos]}
      binding.pry
    elsif child.name == "text"
      puts "skipped text element"
    end
  end
end


get_bookmarks_from_doc = lambda do |admin, contexts, tags, handle_nested_node|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  cur_position = {pos: [0], prev_depth: 0, prev_node: false } 
  store = { link_info: [],  tag_info: [] } 
  
  ##? MAIN initial doc digest
  doc.children.each do |child|
    if !AcceptedTags.include?(child.name) || cur_position[:prev_node] == false ##? Catches exceptions & errors 
      if cur_position [:prev_node] == false
        cur_position[:prev_node] = {name: "First Element Excluded!", child: child}
      else
        puts "Invalid Node Name Found"
        binding.pry
      end
    end

    ##? Traks and updates cur_position for info creation
    if child.name == "p" 
      if cur_position[:prev_node][:name] ##jumps over first exception not being a noko obj
        true
        puts "first node exception"
      elsif cur_position[:prev_node].name
        cur_position[:pos][cur_position[:pos].length-1] -= (1 + cur_position[:prev_depth])
        binding.pry
      end
    elsif child.name == "dl" 
      cur_position[:pos][cur_position[:pos].length-1] += 1
    elsif child.name == "dt" 
      cur_position[:prev_node].name == "p" ? cur_position[:pos] << 0 : true
    else
      puts "The Uh-Oh perimeter has been breached. All hands on Desk. Man your Workstations."
      binding.pry
    end
    
    ##? catches nested nodes
    if child.children.length > 1 && child.name != "text" 
      handle_nested_node.call(child, cur_position, store, handle_nested_node)
    end

  puts (store)
  puts (cur_position)
  binding.pry

  ##? Tracks depth for repeating elements
    if cur_position[:prev_node] == child 
      cur_position[:prev_depth] += 1
      cur_position[:prev_node] = child
    else
      cur_position[:prev_depth] = 0
      cur_position[:prev_node] = child
    end
  
  
  end
end

## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

## /config/initializers/object_config.yml for list 
contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

get_bookmarks_from_doc.call(admin, contexts, tags, handle_nested_node)

##! GOALS
  # links = formatted_links.map { |link| Link.create!(link.info)}