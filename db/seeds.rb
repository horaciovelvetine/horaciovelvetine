AcceptedTags = ["dl", "dt", "meta", "html", "p", "text", "h3", "a"]
## Helper methods for importing bookmarks for testing
handle_nested_node = lambda do |node, history, store|
  node.children.each do |child|
    if child.children.length > 1
      handle_nested_node(child, history, store)
    elsif child.name =="a"
      store[:tag_info] << {name: child.children.text.downcase.strip, position: history[:pos]}
      binding.pry
    elsif child.name =="h3"
      store[:link_info] << {name: child.attributes["name"], href: child.attributes["href"], position: history[:pos]}
      binding.pry
    end
  end
  binding.pry
end


get_bookmarks_from_doc = lambda do |admin, contexts, tags, handle_nested_node|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  history = {pos: [0], prev_node: false, prev_depth: 0 } 
  store = { link_info: [],  tag_info: [] } 
  
  ##? MAIN initial doc digest
  doc.children.each do |child|
    if !AcceptedTags.include?(child.name) || history[:prev_node] == false ##? invalid node name 
      if history [:prev_node] == false
        history[:prev_node] = {name: "First Element Excluded!", child: child}
      else
        puts "Invalid Node Name Found"
        binding.pry
      end
    elsif child.children.length > 1 && child.name != "text" ##? catches nested nodes
      handle_nested_node.call(child, history, store)
    elsif child.name == "dl" ##? Increase postition by 1
      history[:pos][history[:pos].length-1] += 1
    elsif child.name == "p" ##? Decrease position -1 for consecutive repeating "P" nodes
      history[:prev_node].name == "a" ? history[:pos][history[:pos].length-1] -= (1 + history[:prev_depth]) : true
      binding.pry
    elsif child.name == "dt" ##? Adds new column to position 
      history[:prev_node].name == "p" ? history[:pos] << 0 : true
    else
      puts "The Uh-Oh perimeter has been breached. All hands to console. Man your Keyboards."
      binding.pry
    end
  ##? Tracks depth for repeating elements
    if history[:prev_node] == child 
      history[:prev_depth] += 1
      history[:prev_node] = child
    else
      history[:prev_depth] = 0
      history[:prev_node] = child
    end
  
  puts (child)
  puts (store)
  puts (history)
  binding.pry
  
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