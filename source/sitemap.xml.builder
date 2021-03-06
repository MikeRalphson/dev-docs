xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  sitemap.resources.each do |resource|
    xml.url do
      xml.loc "#{data.site.url}#{resource.url}"
    end if resource.url !~ /\.(css|js|zip|eot|svg|WOFF|woff|woff2|ttf|png|jpg)$/ 
  end
end
