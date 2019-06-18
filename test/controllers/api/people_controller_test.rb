require 'test_helper'

class Api::PeopleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_people_index_url
    assert_response :success
  end

  test "should get show" do
    get api_people_show_url
    assert_response :success
  end

  test "should get update" do
    get api_people_update_url
    assert_response :success
  end

end
