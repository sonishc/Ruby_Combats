class UserEdit extends React.Component {
  render() {
    return (
      <form action="/user/1/edit" method="post">
        <label>
          Select your player type:
          <select value="" name="user[type]">
            <option value="magician">Magician</option>
            <option value="rogue">Rogue</option>
            <option value="warrior">Warrior</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// <h1>Select your player type</h1>
// <%= @user.name %> you are <%= @user.type %>
// <div>
//   <%= form_for(@user) do |f| %>

//     <%= f.label :type %>
//     <%= f.select(:type, options_for_select([['Magician'], ['Warrior'], ['Rogue']] )) %>

//     <%= f.submit "Save changes", class: "btn btn-primary" %>
//   <% end %>

// </div>