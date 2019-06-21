class Api::CommentsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_user, only: [:index, :create, :edit, :destroy]

  def index

  end

  def create
    comment = Comment.create(params.require(:comment).permit(:person_id, :body, :user_id))
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

  def persons_comments
    render json: Comment.persons_comments(params[:person_id])
    # comment = Comment.where("person_id = ?", params[:person_id])
    # render json: comment
  end

  private

    def set_user
      @user = current_user
    end

end
