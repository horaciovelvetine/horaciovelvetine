## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")
tags = Objects['tags'].map { |tag| Tag.create!(name: "#{tag}", admin: admin)}

# ## /config/initializers/object_config.yml for list 
links = Objects['links'].map { |link| Link.create!(name: "#{link['name']}", href: "#{link['href']}", pinned: link['pinned'])}

links.each_with_index do |link, index|
  Objects['links'][index]['tagNames'].each do |tagName|
    tag = Tag.find_by_name("#{tagName}")
    if tag.nil? 
      binding.pry
    end
    
    link.tags << tag
  end
  link
end




