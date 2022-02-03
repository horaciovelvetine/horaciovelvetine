
## Helper methods for importing bookmarks for testing
digest_node = lambda do |node|
  if node.children == 1
    node.name == "a" ? digest_link(node) : digest_link(node)
  end
  binding.pry
end
digest_link = lambda do |ele|
  binding.pry
end
digest_tag = lambda do |ele|
  binding.pry
  
  digest = Tag.find_or_create_by(name: ele.children.last.text)
  end

log_error_node = lambda do |node|
  puts "<-- Note: -->"
  puts "Node Import not supported for: #{node.name}"
  puts "Text: #{node.text}"
  puts "<----------->"
  puts "#{node}"
  puts "<----------->"
end
AcceptedTags = ["dl", "dt", "meta", "html", "p"]
Exceptions = ["bookmarks bar", "h1", "meta"]

## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

## /config/initializers/object_config.yml for list 
contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}


  
get_bookmarks_from_doc = lambda do |admin, contexts, tags|
  doc = BookmarksDoc.search("//dl") ## Grabs Body of Doc
  track = {score: [0], prev_element: [], prev_depth: 0 } ##=> track[:score] => [0]
  store = { link_info: [],  tag_info: [] } 
  
  
  

  doc.children.each do |child|
    if !AcceptedTags.include?(child.name)
      binding.pry
      log_error_node.call(child)
    elsif Exceptions.include?(child.name)
      binding.pry
      puts "Exception Node Skipped"
      next
    elsif track[:prev_element].empty?
      puts "First Node Exception"
    elsif child.name == "dl" ##? INCREASE CUR_SCORE +1
      track[:score][track[:score].length-1] += 1
      binding.pry
    elsif child.name == "p" ##? DECREASE CUR_SCORE -1 for ea consecutive repeating "P" element
      track[:prev_element].last.name == "a" ? track[:score][track[:score].length-1] -= 1 : true
      binding.pry
    elsif child.name == "dt" ##? PUSH A NEW COLUMN TO SCORE IF PREV "P", THEN DIGEST CHILD.
      track[:prev_element].last.name == "p" ? track[:score] << 0 : true
      
      ##? ADDS INFO FROM ELEMENTS INFO/ATTR TO ARRAY TO BE CREATED
      if child.children.first.name ## add element info  
        @ele = child.children.first
        if @ele.name == "h3"##adds to tag_info
          store[:tag_info] << {name: @ele.children.first.text.downcase.strip, position: track[:score] }
        else  ##adds to link_info
          store[:link_info] << {name: @ele.attributes["name"], href: @ele.attributes["href"],  position: track[:score]}
        end
        binding.pry
      else ## Exception caatch
        puts "Add Element Info Exception!"
        binding.pry
      end
    
    else ##? CATCHES EDGE CASE
      binding.pry
    end

    
    ##? ADDS TO DEPTH FOR REPEATING ELEMENTS, AND RESETS DEPTH NON REPEATING
    if track[:prev_element].name == child.name 
      track[prev_depth] += 1
      track[:prev_element] = child
    else
      track[:prev_depth] = 0
      track[:prev_element] = child
    end
    binding.pry
    
  end
    

  binding.pry
  ## returns an array of freshly created links
  # return links = formatted_links.map { |link| Link.create!(link.info)}
end







get_bookmarks_from_doc.call(admin, contexts, tags)