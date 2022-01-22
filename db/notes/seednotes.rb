admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}


formatted_links = []

HTML.search("//dl").first.children.each do |node|
  tags_to_add = [] ## Should be an array of tag_names to find/create + add to

  if ( node.name == "p" || node.name == "dl" ||node.name == "dt" ) && node.children.length < 2
    puts "----------------------------------------------------------------"
    puts " NODE EXCLUDED name:#{node.name}, said:(#{node.text}) step: 1"
    puts "----------------------------------------------------------------"
    next
  end
  
  node.children.each do |child|
    if child.text == "Bookmarks Bar" || child.name == "text" || child.name == "p" 
      puts "----------------------------------------------------------------"
      puts " NODE EXCLUDED name:#{child.name}, said:(#{child.text}) step: 2"
      puts "----------------------------------------------------------------"
      next
    end
    
    if child.name == "a"
      binding.pry
    elsif child.name == "h3"
      binding.pry
    end
    

    ##[CONTINUES RECURSIVELY]
  end
end
  
  ## Example object needed to seed DB with links 
  # links = [{name: "Rails Docs", href: "https://guides.rubyonrails.org/", tags: ["ruby", "rails", "docs", "documentation", "resource", "reference", etc..], contexts: ["bookmarked"], admin_id: admin}]
  
  ## Build out some skip dictionaries? 
  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")

admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

  # @nodenames = ["dl", "p", "dt", "h3", "a"]
  ##RULES:
  ## --> dl: "increase current value of x by 1",
  ## --> p: "if prev == 'a' then decrease current value of x by 1"
  ## --> p: "if prev == 'p' then check next value of prev"
  ## --> dt: "if prev == 'p' then push new 0 to array" (signifies a "max" for that axis of x values) then should check for tag or link digest

  # @formatted = []
  # @history = { score: [0], prev: [""] }

HTML.search("//dl").first.children.each do |node|
  node.children.length > 1 ? iterate_over_subnodes(node) : import_node(node)
  binding.pry
end



