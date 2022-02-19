class BookmarkrConfigSerializer
  include JSONAPI::Serializer
  set_type :configObject

  attributes :bookmarks, :tags, :settings
end
