AcceptedTags = ["dl", "dt", "meta", "html", "p", "text", "h3", "a"]
## Helper methods for importing bookmarks for testing
digest_node = lambda do |node, his, store|
  
  
  
  node.children.each do |child|
    if !AcceptedTags.include?(child.name) ##? invalid tag name 
      binding.pry
    elsif child.children.length > 1 && child.name != "text" ##? catches for recursive nodes
      binding.pry
    elsif his[:prev_node] == false ##? First node exception
      puts "First Node Exception"
      his[:prev_node] = {name: "first_execption_ele", child: child}
    elsif child.name == "dl" ##? Increase postition by 1
      his[:pos][his[:pos].length-1] += 1
    elsif child.name == "p" ##? Decrease position -1 for consecutive repeating "P" nodes
      his[:prev_node].name == "a" ? his[:pos][his[:pos].length-1] -= (1 + his[:prev_depth]) : true
      binding.pry
    elsif child.name == "dt" ##? Adds new column to position 
      his[:prev_node].name == "p" ? his[:pos] << 0 : true
    elsif child.name == "h3" ##? Tag info get
      store[:tag_info] << {name: child.children.text.downcase.strip, position: his[:pos]}
      binding.pry
    elsif child.name == "a" ##? Link info get
      binding.pry
      store[:link_info] << {name: child.attributes["name"], href: child.attributes["href"], position: his[:pos]}
    else ##? node info exception catch
      puts "Add node Info Exception!"
      binding.pry
    end

    ##? Adds depth for repeating tag count
    if his[:prev_node] == child 
      his[:prev_depth] += 1
      his[:prev_node] = child
    else
      his[:prev_depth] = 0
      his[:prev_node] = child
    end
    binding.pry

  end
end


get_bookmarks_from_doc = lambda do |admin, contexts, tags, digest_node|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  his = {pos: [0], prev_node: false, prev_depth: 0 } 
  store = { link_info: [],  tag_info: [] } 
  
  doc.children.each do |child|
    digest_node.call(child, his, store)
  end

  binding.pry
end

## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

## /config/initializers/object_config.yml for list 
contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

get_bookmarks_from_doc.call(admin, contexts, tags, digest_node)

##! GOALS
  # links = formatted_links.map { |link| Link.create!(link.info)}






