class BookmarkrConfigSerializer
  include JSONAPI::Serializer
  set_type :configObject
  attributes :configSettings, :bookmarks, :tags, :contexts
end
