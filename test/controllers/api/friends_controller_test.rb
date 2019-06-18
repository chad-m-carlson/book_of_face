require 'test_helper'

class Api::FriendsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_friends_index_url
    assert_response :success
  end

  test "should get new" do
    get api_friends_new_url
    assert_response :success
  end

end
