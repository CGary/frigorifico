import { getDateLocalToUTC } from "../../tools";

export const addClienteUseCase = async (props) => {
  const { addCliente, getServerTimestamp, fecha, ...rest } = props;

  const query = {
    ...rest,
    fecha: getDateLocalToUTC(fecha),
    timestamp: getServerTimestamp(),
  };
  await addCliente(query);
};

export const removeClienteUseCase = async ({ removeCliente, ...query }) =>
  removeCliente(query);
