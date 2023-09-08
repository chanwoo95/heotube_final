export default function MenuItem({
  icon,
  name,
  categoryId,
  active,
  activeNumber,
  number,
}) {
  return (
    <li
      key={categoryId}
      onClick={() => {
        categoryId(number[1]);
        activeNumber(number[0]);
      }}
      className={`${
        active === number[0]
          ? "opacity-70 bg-slate-600"
          : "hover:opacity-70 hover:bg-slate-600"
      } flex items-center pl-4 pr-4 pt-1 pb-1 rounded-lg cursor-pointer transition ease-in delay-50`}
    >
      {icon}
      <h3 className="pt-4 pb-4 pl-3">{name}</h3>
    </li>
  );
}
