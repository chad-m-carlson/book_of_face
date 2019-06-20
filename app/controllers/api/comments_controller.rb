class Api::CommentsController < ApplicationController
  before_action :set_user

  def index
  end

  def create
    comment = Comment.create(params.require(:comment).permt(:person_id, :body))
    if comment.save
      render json: comment
    else
      render errors: comment.errors, status: 422
    end
  end

  def edit
  end

  def destroy
  end

  private

    def set_user
      @user = current_user
    end

end
