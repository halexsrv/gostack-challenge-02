import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      zip,
    } = await Recipient.create(req.body);

    return res.json({ id, street, number, complement, state, city, zip });
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    const {
      street,
      number,
      complement,
      state,
      city,
      zip,
    } = await recipient.update(req.body);

    return res.json({ id, street, number, complement, state, city, zip });
  }
}

export default new RecipientController();
