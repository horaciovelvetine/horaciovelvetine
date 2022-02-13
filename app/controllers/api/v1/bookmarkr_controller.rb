module API
  module V1
    class BookmarkrController < ApplicationController::Base
      
      def index ##call on dom load to serve up all bookmarks 
        
        binding.pry
        ## Creates Vars to Serialize
        # bookmarks = Context.where(name: 'bookmarked').links
        # link_groups = LinkGroup.all

        ## Returns JSON to front end 
        # redner json: BookmarkrSerializer.new(bookmarks, link_groups).serializable_hash.to_json
      end 

      def search ## returns group of resultIds to FE 
        binding.pry
      end 
      

      ##! CRUD    
      
      def create 
        binding.pry 
      end 

      def edit 
        binding.pry 
      end 

      def update
        binding.pry
      end 

      def destroy
        binding.pry
      end 


    end
  end
end
