function generate_links(links_list) { // generate navbar links
  const links = links_list.map((value, index) => {
    return  (<li key={value.id} className={value.url == window.location.pathname ? 'active' : null}>
              <a href={value.url} id={value.id}>{value.title}</a>
            </li>);
  });
  return links;
}

function generate_spans(span_list) { // generate burger mobile menu
  const spans = span_list.map((name, index) => {
    return (<span key={index} className={name}></span>);
  });

  return spans;
}

function generate_row(row_list) { // generate rows in user profile with user info
  const tableRow = row_list.map((value, index) => {
    return (<tr key={index} >
              <td>{value.title}</td>
              <td>{value.data}</td>
            </tr>);
  });

  return tableRow;
}

function generate_option(option_list){ // generate options tochhose Class
  const option = option_list.map((value, index) => {
    return (<option key={index} value={value.option}>{value.title}</option>);
  });

  return option;
}
