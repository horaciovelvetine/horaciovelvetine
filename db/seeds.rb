## Creates the default admin w/ env credentials
admin = Admin.create(email: "#{ENV["admin_email"]}", password: "#{ENV["admin_password"]}")
tags = Objects['tags'].map { |n| Tag.create!(name: "#{n}", admin: admin)}

# ## /config/initializers/object_config.yml for list 
# links = Objects['links'].map { |n| Link.create!(name: "#{n['name']}", href: "#{n['href']}", pinned: false)}
# links = Objects['links'].map { |l| Link.create}