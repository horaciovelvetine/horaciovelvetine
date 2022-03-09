class LinkSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :link
  set_id :id

  attributes :name, :href, :pinned, :tags

end
