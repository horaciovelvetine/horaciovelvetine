# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

# Link {name: , href: , icon: , pinned: }


HTML.search("//dl").first.children.each do |node|
  formatted_links = []
  tags_to_add_by_name = [] ## Should be an array of tag_names to find/create + add to
  context = contexts##.find_by_name("bookmarked")



  if node.name == "p" && node.children.length < 2
    puts "Skip #1"
    puts "name:#{node.name}, said: #{node.text}"
    next
  end

  if node.children.length > 2
    
    
    node.children.each do |child|
      binding.pry
    end

  end

  binding.pry

end



