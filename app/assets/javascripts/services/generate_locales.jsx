function generate_locale_links(get_locale, current_locale) {
  locale_list = get_locale.filter(function(locale_list) {
    return locale_list != current_locale
  });
  
  const locales = locale_list.map((value, index) => {
    return  (<a key={index} onClick={(e) => locale(value)}>
              <span className="lang-sm" lang={value}></span>
            </a>);
  });

  return locales;
}