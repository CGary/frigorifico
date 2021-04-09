export const setIngresoUseCase = async (props) => {
  const { getRefIngresoById, getClientebyRef, idIngreso, refCliente } = props;

  const refIngreso = getRefIngresoById({ idIngreso });
  const { nombre } = await getClientebyRef(refCliente);

  return { refIngreso, nombre };
};
