require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_comments_index_url
    assert_response :success
  end

  test "should get update" do
    get api_comments_update_url
    assert_response :success
  end

  test "should get edit" do
    get api_comments_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get api_comments_destroy_url
    assert_response :success
  end

end
