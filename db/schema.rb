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

ActiveRecord::Schema.define(version: 2021_12_28_220659) do

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

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "department"
    t.string "location"
    t.bigint "contact_info_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_info_id"], name: "index_companies_on_contact_info_id"
  end

  create_table "contact_infos", force: :cascade do |t|
    t.string "first"
    t.string "last"
    t.string "pseudo"
    t.string "phone"
    t.string "email"
    t.string "email_alt"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_contact_infos_on_admin_id"
  end

  create_table "contexts", force: :cascade do |t|
    t.string "name"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_contexts_on_admin_id"
  end

  create_table "contexts_jobs", id: false, force: :cascade do |t|
    t.bigint "job_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "job_id"], name: "index_contexts_jobs_on_context_id_and_job_id"
    t.index ["job_id", "context_id"], name: "index_contexts_jobs_on_job_id_and_context_id"
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

  create_table "contexts_skills", id: false, force: :cascade do |t|
    t.bigint "skill_id", null: false
    t.bigint "context_id", null: false
    t.index ["context_id", "skill_id"], name: "index_contexts_skills_on_context_id_and_skill_id"
    t.index ["skill_id", "context_id"], name: "index_contexts_skills_on_skill_id_and_context_id"
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

  create_table "educations", force: :cascade do |t|
    t.string "level"
    t.string "school"
    t.string "degree"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_educations_on_admin_id"
  end

  create_table "experiences", force: :cascade do |t|
    t.string "title"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_experiences_on_admin_id"
  end

  create_table "grocery_lists", force: :cascade do |t|
    t.bigint "task_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_grocery_lists_on_task_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "text"
    t.bigint "recipe_id"
    t.bigint "journal_entry_id"
    t.bigint "grocery_list_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["grocery_list_id"], name: "index_ingredients_on_grocery_list_id"
    t.index ["journal_entry_id"], name: "index_ingredients_on_journal_entry_id"
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.string "desc"
    t.string "salary"
    t.string "location"
    t.bigint "company_id", null: false
    t.bigint "contact_info_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_jobs_on_company_id"
    t.index ["contact_info_id"], name: "index_jobs_on_contact_info_id"
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

  create_table "link_groups_tags", id: false, force: :cascade do |t|
    t.bigint "link_group_id", null: false
    t.bigint "tag_id", null: false
    t.index ["link_group_id", "tag_id"], name: "index_link_groups_tags_on_link_group_id_and_tag_id"
    t.index ["tag_id", "link_group_id"], name: "index_link_groups_tags_on_tag_id_and_link_group_id"
  end

  create_table "links", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.string "desc"
    t.boolean "pinned"
    t.bigint "linkable_id"
    t.string "linkable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_links_on_name"
    t.index ["text"], name: "index_links_on_text"
  end

  create_table "links_link_groups", force: :cascade do |t|
    t.string "link"
    t.string "link_group"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["link"], name: "index_links_link_groups_on_link"
    t.index ["link_group"], name: "index_links_link_groups_on_link_group"
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

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "desc"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_projects_on_admin_id"
  end

  create_table "projects_skills", force: :cascade do |t|
    t.string "project"
    t.string "skill"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project"], name: "index_projects_skills_on_project"
    t.index ["skill"], name: "index_projects_skills_on_skill"
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

  create_table "resumes", force: :cascade do |t|
    t.string "name"
    t.string "version"
    t.bigint "content_id"
    t.string "content_type"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "jobs_id"
    t.index ["admin_id"], name: "index_resumes_on_admin_id"
    t.index ["jobs_id"], name: "index_resumes_on_jobs_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_skills_on_admin_id"
  end

  create_table "statements", force: :cascade do |t|
    t.string "name"
    t.string "body"
    t.bigint "admin_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_statements_on_admin_id"
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

  create_table "tags_tasks", id: false, force: :cascade do |t|
    t.bigint "task_id", null: false
    t.bigint "tag_id", null: false
    t.index ["tag_id", "task_id"], name: "index_tags_tasks_on_tag_id_and_task_id"
    t.index ["task_id", "tag_id"], name: "index_tags_tasks_on_task_id_and_tag_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name"
    t.text "desc"
    t.boolean "flagged"
    t.boolean "ongoing"
    t.bigint "context_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["context_id"], name: "index_tasks_on_context_id"
  end

  add_foreign_key "companies", "contact_infos"
  add_foreign_key "contact_infos", "admins"
  add_foreign_key "contexts", "admins"
  add_foreign_key "contexts_jobs", "contexts"
  add_foreign_key "contexts_jobs", "jobs"
  add_foreign_key "contexts_links", "contexts"
  add_foreign_key "contexts_links", "links"
  add_foreign_key "contexts_notes", "contexts"
  add_foreign_key "contexts_notes", "notes"
  add_foreign_key "contexts_skills", "contexts"
  add_foreign_key "contexts_skills", "skills"
  add_foreign_key "date_utils", "contexts"
  add_foreign_key "educations", "admins"
  add_foreign_key "experiences", "admins"
  add_foreign_key "grocery_lists", "tasks"
  add_foreign_key "ingredients", "grocery_lists"
  add_foreign_key "ingredients", "journal_entries"
  add_foreign_key "ingredients", "recipes"
  add_foreign_key "jobs", "companies"
  add_foreign_key "jobs", "contact_infos"
  add_foreign_key "journal_entries", "recipes"
  add_foreign_key "journal_entries_tags", "journal_entries"
  add_foreign_key "journal_entries_tags", "tags"
  add_foreign_key "link_groups", "admins"
  add_foreign_key "link_groups_tags", "link_groups"
  add_foreign_key "link_groups_tags", "tags"
  add_foreign_key "links_tags", "links"
  add_foreign_key "links_tags", "tags"
  add_foreign_key "projects", "admins"
  add_foreign_key "recipes_tags", "recipes"
  add_foreign_key "recipes_tags", "tags"
  add_foreign_key "resumes", "admins"
  add_foreign_key "resumes", "jobs", column: "jobs_id"
  add_foreign_key "skills", "admins"
  add_foreign_key "statements", "admins"
  add_foreign_key "states", "admins"
  add_foreign_key "steps", "journal_entries"
  add_foreign_key "steps", "recipes"
  add_foreign_key "tags", "admins"
  add_foreign_key "tags_tasks", "tags"
  add_foreign_key "tags_tasks", "tasks"
  add_foreign_key "tasks", "contexts"
end
