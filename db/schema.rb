# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_06_213707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "contexts", force: :cascade do |t|
    t.string "name"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_contexts_on_admin_id"
  end

  create_table "contexts_date_utils", id: false, force: :cascade do |t|
    t.bigint "date_util_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "date_util_id"], name: "index_contexts_date_utils_on_context_id_and_date_util_id"
    t.index ["date_util_id", "context_id"], name: "index_contexts_date_utils_on_date_util_id_and_context_id"
  end

  create_table "contexts_links", id: false, force: :cascade do |t|
    t.bigint "link_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "link_id"], name: "index_contexts_links_on_context_id_and_link_id"
    t.index ["link_id", "context_id"], name: "index_contexts_links_on_link_id_and_context_id"
  end

  create_table "contexts_notes", id: false, force: :cascade do |t|
    t.bigint "note_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "note_id"], name: "index_contexts_notes_on_context_id_and_note_id"
    t.index ["note_id", "context_id"], name: "index_contexts_notes_on_note_id_and_context_id"
  end

  create_table "contexts_recipes", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "recipe_id"], name: "index_contexts_recipes_on_context_id_and_recipe_id"
    t.index ["recipe_id", "context_id"], name: "index_contexts_recipes_on_recipe_id_and_context_id"
  end

  create_table "date_utils", force: :cascade do |t|
    t.date "start"
    t.date "end"
    t.date "on"
    t.boolean "ongoing"
    t.string "kind"
    t.bigint "dateable_id"
    t.string "dateable_type"
    t.bigint "context_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["context_id"], name: "index_date_utils_on_context_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "text"
    t.bigint "recipe_id"
    t.bigint "journal_entry_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["journal_entry_id"], name: "index_ingredients_on_journal_entry_id"
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id"
  end

  create_table "journal_entries", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.integer "stars"
    t.bigint "recipe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipe_id"], name: "index_journal_entries_on_recipe_id"
  end

  create_table "journal_entries_tags", id: false, force: :cascade do |t|
    t.bigint "journal_entry_id", null: false
    t.bigint "tag_id", null: false
    t.index ["journal_entry_id", "tag_id"], name: "index_journal_entries_tags_on_journal_entry_id_and_tag_id"
    t.index ["tag_id", "journal_entry_id"], name: "index_journal_entries_tags_on_tag_id_and_journal_entry_id"
  end

  create_table "link_groups", force: :cascade do |t|
    t.string "name"
    t.boolean "pinned"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_link_groups_on_admin_id"
  end

  create_table "link_groups_links", id: false, force: :cascade do |t|
    t.bigint "link_id", null: false
    t.bigint "link_group_id", null: false
    t.index ["link_group_id", "link_id"], name: "index_link_groups_links_on_link_group_id_and_link_id"
    t.index ["link_id", "link_group_id"], name: "index_link_groups_links_on_link_id_and_link_group_id"
  end

  create_table "link_groups_tags", id: false, force: :cascade do |t|
    t.bigint "link_group_id", null: false
    t.bigint "tag_id", null: false
    t.index ["link_group_id", "tag_id"], name: "index_link_groups_tags_on_link_group_id_and_tag_id"
    t.index ["tag_id", "link_group_id"], name: "index_link_groups_tags_on_tag_id_and_link_group_id"
  end

  create_table "links", force: :cascade do |t|
    t.string "name"
    t.string "href"
    t.boolean "pinned"
    t.bigint "linkable_id"
    t.string "linkable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_links_on_name"
  end

  create_table "links_tags", id: false, force: :cascade do |t|
    t.bigint "link_id", null: false
    t.bigint "tag_id", null: false
    t.index ["link_id", "tag_id"], name: "index_links_tags_on_link_id_and_tag_id"
    t.index ["tag_id", "link_id"], name: "index_links_tags_on_tag_id_and_link_id"
  end

  create_table "notes", force: :cascade do |t|
    t.text "text"
    t.bigint "noteable_id"
    t.string "noteable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["noteable_type", "noteable_id"], name: "index_notes_on_noteable_type_and_noteable_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "time"
    t.string "serves"
    t.string "desc"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_recipes_on_name"
  end

  create_table "recipes_tags", id: false, force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.bigint "tag_id", null: false
    t.index ["recipe_id", "tag_id"], name: "index_recipes_tags_on_recipe_id_and_tag_id"
    t.index ["tag_id", "recipe_id"], name: "index_recipes_tags_on_tag_id_and_recipe_id"
  end

  create_table "states", force: :cascade do |t|
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_states_on_admin_id"
  end

  create_table "steps", force: :cascade do |t|
    t.string "text"
    t.bigint "recipe_id"
    t.bigint "journal_entry_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["journal_entry_id"], name: "index_steps_on_journal_entry_id"
    t.index ["recipe_id"], name: "index_steps_on_recipe_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_tags_on_admin_id"
    t.index ["name"], name: "index_tags_on_name"
  end

  add_foreign_key "contexts", "admins"
  add_foreign_key "contexts_date_utils", "contexts"
  add_foreign_key "contexts_date_utils", "date_utils"
  add_foreign_key "contexts_links", "contexts"
  add_foreign_key "contexts_links", "links"
  add_foreign_key "contexts_notes", "contexts"
  add_foreign_key "contexts_notes", "notes"
  add_foreign_key "contexts_recipes", "contexts"
  add_foreign_key "contexts_recipes", "recipes"
  add_foreign_key "date_utils", "contexts"
  add_foreign_key "ingredients", "journal_entries"
  add_foreign_key "ingredients", "recipes"
  add_foreign_key "journal_entries", "recipes"
  add_foreign_key "journal_entries_tags", "journal_entries"
  add_foreign_key "journal_entries_tags", "tags"
  add_foreign_key "link_groups", "admins"
  add_foreign_key "link_groups_links", "link_groups"
  add_foreign_key "link_groups_links", "links"
  add_foreign_key "link_groups_tags", "link_groups"
  add_foreign_key "link_groups_tags", "tags"
  add_foreign_key "links_tags", "links"
  add_foreign_key "links_tags", "tags"
  add_foreign_key "recipes_tags", "recipes"
  add_foreign_key "recipes_tags", "tags"
  add_foreign_key "states", "admins"
  add_foreign_key "steps", "journal_entries"
  add_foreign_key "steps", "recipes"
  add_foreign_key "tags", "admins"
end
