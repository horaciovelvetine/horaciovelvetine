class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :registerable, :recoverable, and :omniauthable 
  devise :database_authenticatable, :rememberable, :validatable

  ## Adds Access to Searchable Objects
  has_many :link_groups
  has_many :tags

  ## Adds Access to backend (para)State Object
  has_one :state
end
