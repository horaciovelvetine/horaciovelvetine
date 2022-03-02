class BookmarkrResultsSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :results_array

  attribute :results do |response|
    if response.links == "NA"
      results = {resultsIds: [], id: "noResultsResponse" }
    else
      results = response.links.map{ |l| {resultId: l.id, resultName: l.name, tagsIds: (l.tags.map{ |t| t.id }) } }
    end
    results
  end

end