module hired
    class HiredController < ActionController::Base
    before_action :set_company,  only: :show

    def show
        binding.pry
    end

    private

    def set_company
        ## TODO input :com_attn attribute return the relevant resume
        binding.pry
        # if params[:com_attn].empty? 
            # send to non james home page
        # end
        # company = params[:com_attn]
        # @resume = Resume.where( resume.company.name: company )
    end
end