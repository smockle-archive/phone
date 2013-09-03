/* Phone
 * When included with a project, a jQuery plugin ("phone") is enabled.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/* Phone
 * Limits characters entered in a text field to those used in phone numbers.
 *
 * Usage: 
 * $(elem).phone(); // maxlength default value is 14
 * $(elem).phone({ maxlength: "7" });
 */
(function ($) {
    $.fn.phone = function ( options ) {
        // set default options
         var settings = $.extend({
            maxlength: "14",
        }, options );
        
        this.attr("maxlength", settings.maxlength);
        this.keypress(function (e) { if (!e) e = window.event; return is_number(e); });
		return this;
	}
}) (jQuery);

function is_number(e) {
    var c = e.which ? e.which : e.keyCode;
    return (c <= 32 || (c >= 48 && c <= 57) || c == 40 || c == 41 || c == 45 || c == 46);
}

/* C#
 * Formats a string as a phone number.
 * All non-numeric characters are removed.
 * If the result has 7 characters, the phone number is formatted like "xxx-xxxx".
 * If the result has 10 characters, the phone number is formatted like "(xxx) xxx-xxxx".
 * If the result does not have 7 or 10 characters, null is returned.
 * <param name="s">String to format.</param>
 * public static string ToPhone(this string s) {
 *      s = Regex.Replace((s ?? ""), @"\D", "");
 *      if ((s ?? "").Length == 7)
 *          return s.Substring(0, 3) + "-" + s.Substring(3, 4);
 *      else if ((s ?? "").Length == 10)
 *          return "(" + s.Substring(0, 3) + ") " + s.Substring(3, 3) + "-" + s.Substring(6, 4);
 *      return null;
 * }
 */
