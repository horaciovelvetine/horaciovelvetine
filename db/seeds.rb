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
    
    child.children.each do |grandchild|
      if grandchild.name == "text" || grandchild.name == "p"
        puts "----------------------------------------------------------------"
        puts " NODE EXCLUDED name:#{grandchild.name}, said:(#{grandchild.text}) step: 3"
        puts "----------------------------------------------------------------"
        next
      end

      if grandchild.name == "a"
        binding.pry
      elsif grandchild.name == "h3"
        binding.pry
      end

      grandchild.children.each do |greatchild|
        if greatchild.name == "text" || greatchild.name == "p"
          puts "----------------------------------------------------------------"
          puts " NODE EXCLUDED name:#{greatchild.name}, said:(#{greatchild.text}) step: 4"
          puts "----------------------------------------------------------------"
          next
        end
      
        if greatchild.name == "a"
          binding.pry
        elsif greatchild.name == "h3"
          binding.pry
        end

        greatchild.children.each do |greatestchild|
          if greatestchild.name == "text" || greatestchild.name == "p"
            puts "----------------------------------------------------------------"
            puts " NODE EXCLUDED name:#{greatestchild.name}, said:(#{greatestchild.text}) step: 5"
            puts "----------------------------------------------------------------"
            next
          end
        
          if greatestchild.name == "a"
            binding.pry
          elsif greatestchild.name == "h3"
            binding.pry
          end

          greatestchild.children.each do |wunderkin|
            if wunderkin.name == "text" || wunderkin.name == "p"
              puts "----------------------------------------------------------------"
              puts " NODE EXCLUDED name:#{wunderkin.name}, said:(#{wunderkin.text}) step: 6"
              puts "----------------------------------------------------------------"
              next
            end

            if wunderkin.name == "a"
              binding.pry
            elsif wunderkin.name == "h3"
              binding.pry
            else
            ## the how are we related zone
            binding.pry
            end
          
          end
        end
      end
    end
  end
end

  # skip_p_element = (node.name == "p"||child.name == "p")
  # skip_text_element = (node.name =="text" || child.name == "text")
  # skip_nscape_element = (node.name == "dt" || node.name == "dl")
