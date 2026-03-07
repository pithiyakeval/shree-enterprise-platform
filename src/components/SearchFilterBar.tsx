import { Input } from "@/components/ui/input";

const SearchFilterBar = ({ search, setSearch, filter, setFilter }: any) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Input
        placeholder="Search by name, phone, city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Services</option>
        <option value="Solar">Solar</option>
        <option value="Mandap">Mandap</option>
        <option value="Both">Both</option>
      </select>
    </div>
  );
};

export default SearchFilterBar;
