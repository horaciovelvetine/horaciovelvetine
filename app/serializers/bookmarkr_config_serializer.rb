class BookmarkrConfigSerializer
  include JSONAPI::Serializer
  set_type :configObject
  attributes :settings, :bookmarks, :tags, :contexts
end
