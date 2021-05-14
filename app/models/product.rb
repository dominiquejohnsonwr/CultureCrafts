class Product < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
