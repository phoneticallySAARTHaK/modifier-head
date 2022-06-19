import { Input, InputGroup, InputGroupText, Button } from 'reactstrap'

const ModForm = () => (
  <div>
    <InputGroup>
      <InputGroupText>
        <i class="bi bi-textarea-t"></i>
      </InputGroupText>
      <Input
        required
        type="text"
        name="url"
        id="url"
        placeholder="Custom url code (Alphanumeric characters)"
      />
    </InputGroup>

    <InputGroup>
      <InputGroupText>
        <i class="bi bi-card-heading"></i>
      </InputGroupText>
      <Input required type="text" name="title" id="title" placeholder="Title" />
    </InputGroup>

    <InputGroup>
      <InputGroupText>
        <i class="bi bi-card-image"></i>
      </InputGroupText>
      <Input
        required
        type="url"
        name="asset_url"
        id="image_url"
        placeholder="Image url"
      />
    </InputGroup>

    <InputGroup>
      <InputGroupText>
        <i class="bi bi-card-text"></i>
      </InputGroupText>
      <Input
        required
        type="textarea"
        name="description"
        id="description"
        placeholder="Description"
      />
    </InputGroup>
    <Button type="submit">Submit</Button>
  </div>
)

export default ModForm
