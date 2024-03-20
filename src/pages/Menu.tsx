import { Container, Dropdown } from "react-bootstrap";

function Menu() {
  return (
    <Container className="p-3">
      <Dropdown>
        <Dropdown.Toggle variant=" primary" id="dropdown-basic">
          Home
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/bus-booking/bus/1">Booking</Dropdown.Item>
          <Dropdown.Item href="/bus-booking/dashboard">Dashboard</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
export default Menu;
