# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171102125246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.string "attachable_type"
    t.bigint "attachable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attachable_id", "attachable_type"], name: "index_images_on_attachable_id_and_attachable_type"
    t.index ["attachable_type", "attachable_id"], name: "index_images_on_attachable_type_and_attachable_id"

  create_table "fight_logs", force: :cascade do |t|
    t.integer "fight_id"
    t.integer "attack"
    t.integer "block"
    t.integer "item_id"
    t.integer "user_id"
    t.float "damage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fights", force: :cascade do |t|
    t.integer "initiator"
    t.integer "opponent"
    t.string "fight_hash"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.boolean "equipped", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "item_id"
    t.integer "count", default: 1
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name"
    t.string "category"
    t.string "hierarchy"
    t.integer "hp"
    t.integer "armor"
    t.integer "power"
    t.integer "instinct"
    t.integer "stamina"
    t.integer "dexterity"
    t.integer "effect_type", default: 0
    t.float "effect_value", default: 0.0
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "levels", force: :cascade do |t|
    t.integer "level"
    t.integer "experience_level"
    t.integer "health_point_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "title", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "power", default: 1
    t.integer "dexterity", default: 1
    t.integer "instinct", default: 1
    t.integer "stamina", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_skills_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.bigint "role_id"
    t.string "name", limit: 99
    t.string "email"
    t.string "locale", default: "en"
    t.integer "hp", default: 100
    t.integer "experience", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "type"
    t.bigint "level_id", default: 1
    t.datetime "last_request_at"
    t.string "location"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["level_id"], name: "index_users_on_level_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["role_id"], name: "index_users_on_role_id"
  end

  add_foreign_key "users", "levels"
end
