class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :registerable, :recoverable, and :omniauthable 
  devise :database_authenticatable, :rememberable, :validatable

  ## Adds Access to Searchable Objects
  has_many :link_groups
  has_many :contexts
  has_many :tags

  ## Adds Access to Info Objects
  has_many :resumes
  has_many :projects
  has_many :experiences
  has_many :educations
  has_many :skills
  has_many :statements
  has_one :contact_info

  ## Adds Access to backend (para)State Object
  has_one :state
end
