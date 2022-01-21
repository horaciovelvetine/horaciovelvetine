  # context = contexts##.find_by_name("bookmarked")
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
    if child.text == "Bookmarks Bar" || child.name == "text" || child.name == "p" || child.name == "dl" || child.name == "dt"
      puts "----------------------------------------------------------------"
      puts " NODE EXCLUDED name:#{child.name}, said:(#{child.text}) step: 2"
      puts "----------------------------------------------------------------"
      next
    end
    
    if child.children.length == 1 
    ## link elements
    elsif child.name == "a"
      binding.pry
    ## tag elements
    elsif child.name == "h3"
      binding.pry
    end

    ## Catch child with multiple add'l children
    if child.children.length > 1
      child.children.each do |grandchild|
        if grandchild.children.length == 1 || grandchild.name == "text" || grandchild.name == "p"
          if grandchild.name == "a"
            binding.pry
          elsif grandchild.name == "h3"
            tag = Tag.find_or_create_by(name: "#{grandchild.text}")
            tags_to_add << tag
            binding.pry
          else
            binding.pry
          end
        else
          binding.pry
        end
      end
    
    
    
    elsif child ## Catch child w/ [] & exceptions 
      puts "----------------------------------------------------------------"
      puts " NODE EXCLUDED name:#{child.name}, said:(#{child.text}) step: 3"
      puts "----------------------------------------------------------------"
    end
  
  ## something went wrong
  binding.pry

  end

end



## This is the last call which needs to be made at end of loop
links = formatted_links.map { |new_link_info| Link.create!(new_link_info)} 

  ## Psuedo Code it Out
  
  ## Example object needed to seed DB with links 
  # links = [{name: "Rails Docs", href: "https://guides.rubyonrails.org/", tags: ["ruby", "rails", "docs", "documentation", "resource", "reference", etc..], contexts: ["bookmarked"], admin_id: admin}]
  
  ## Build out some skip dictionaries? 
  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")