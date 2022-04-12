class ViewModel::Pagination
  DEFAULT = { page: 0, per_page: 10 }.freeze

  attr_reader :page, :per_page, :count

  def initialize(params = {})
    @page = (params[:page] || DEFAULT[:page]).to_i
    @count = params[:count]
    @per_page = (params[:per_page] || DEFAULT[:per_page]).to_i
  end

  def offset
    return 0 if page <= 0

    per_page * page
  end

  def next_page
    page + 1 unless last_page?
  end

  def next_page?
    page < total_pages
  end

  def previous_page
    page - 1 unless first_page?
  end

  def previous_page?
    page > 1
  end

  def first_page?
    page.zero?
  end

  def last_page?
    page == total_pages
  end

  def total_pages
    (count / per_page.to_f).ceil
  end

  def as_json
    {
      page:,
      per_page:,
      total: count,
      total_pages:
    }
  end
end
