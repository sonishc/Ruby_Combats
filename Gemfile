source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'bcrypt', '3.1.11'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'coffee-rails', '~> 4.2'
gem 'devise', '~> 4.1'
gem 'i18n-js', '~> 3.0', '>= 3.0.1'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'paperclip', '~> 5.0.0'
gem 'pry', '~> 0.11.0'
gem 'puma', '~> 3.7'
gem 'pundit', '~> 1.1.0'
gem 'rails', '~> 5.1.4'
gem 'react-bootstrap-rails', '~> 0.30.2'
gem 'react-rails-img'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'faye'
gem 'thin'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'factory_girl_rails', '~> 4.5.0'
  gem 'react-rails'
  gem 'rspec-rails', '~> 3.6'
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'pg', '~> 0.21'
  gem 'rubocop', require: false
  gem 'rubocop-rspec', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
