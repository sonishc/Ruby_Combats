class Image < ApplicationRecord
  belongs_to :attachable, polymorphic: true, optional: true
  has_attached_file :image,
                    styles: { medium: '300x300>', thumb: '100x100>' },
                    url: '/assets/:attachment/:id/:style/:filename',
                    path: ':rails_root/app/assets/images/:attachment/:id/:style/:filename'
  validates_attachment :image, content_type: { content_type: ['image/jpeg', 'image/gif', 'image/png'] }
end