=== Primary Category ===
Contributors: philipjohn
Tags: filter, category, primary
Tested up to: 5.8
Stable tag: 0.1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Provides a new "Primary Category" setting for individual posts and the ability to filter front-end results by that primary category.

== Description ==

Simply and easily give visitors a way to filter content on your blog home page by a "primary category" that you select.

Each post can be assigned a single "primary category" in the editor (see screenshot) when composing posts. This primary category is stored entirely separate from which categories you assign to the post, so you can maintain a distinction between them.

When visitors see your blog home they will have a dropdown showing the available categories, and the ability to choose to view content from all or just one of the categories. This will set a cookie so that the setting is remembered on subsequent visits, and the visitor always has the option of reverting back to seeing all categories.

== Installation ==

Just like any other plugin, install via the admin by uploading the plugin ZIP.

== Frequently Asked Questions ==

= Is it safe to use cookies? =

Cookies can be a performance issue on a high traffic site. The plugin deliberately uses the category slug, so that at the platform level, the caching strategy can easily adjust to cache on just a few variations of the cookie. If you have a large number of categories, it may require a different approach, such as embedding the chosen primary category into the URLs.

= Is this Gutenburg compatible? =

Yes! In fact, you'll see it adds a new sidebar option to choose your primary category. At the moment, there is a very simple dropdown added to the blog page which uses some basic javascript and CSS so you can style it within your theme. However, a future iteration may replace this with a block you can insert wherever you wish.

== Screenshots ==

1. screenshot-1.png - The new option in the editor that allows you to choose a primary category for each post.
2. screenshot-2.png - As shown in the Twenty Twenty One theme, this is the dropdown that visitors can use to filter posts.

== Changelog ==

= 0.1.0 =

* Initial plugin
