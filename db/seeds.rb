## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")

## /config/initializers/object_config.yml for list 
contexts = Objects['contexts'].map { |n| Context.create!(name: "#{n}", admin: admin)}
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}


links = Objects['links'].map { |n| Link.create!(name: "#{n['name']}", href: "#{n['href']}", pinned: false)}

links.each do |link|
  ref = tags.select { |t| t['name'] == "reference"}
  link.contexts << contexts.last
  link.tags << ref
end
