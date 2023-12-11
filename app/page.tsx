"use client";

import { Check, Close } from "@mui/icons-material";
import { useAutocomplete } from "@mui/material";

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div className="text-black opacity-80 text-sm">
      <div {...getRootProps()}>
        <label
          {...getInputLabelProps()}
          className="p-[0 0 4px] leading-6 block"
        >
          Customized hook
        </label>
        {/* InputWrapper */}
        <div
          ref={setAnchorEl}
          className="w-[300px] border border-solid border-[#e9e9e9] bg-[#fff] rounded-[4px] p-[1px] flex flex-wrap hover:border-[#40a9ff] 
          focus:border-[#40a9ff] focus:shadow-sm focus:shadow-[24 144 255 / 20%]"
        >
          {value.map((option: FilmOptionType, index: number) => {
            const label = option.title;
            const onDelete = getTagProps({ index }).onDelete;

            return (
              <div
                {...getTagProps({ index })}
                key={index}
                tabIndex={-1}
                className="flex items-center h-[24px] m-[2px] leading-6 bg-[#fafafa] 
                border border-solid border-[#e8e8e8] rounded-[2px] box-content p-[0 4px 0 10px] outline-none overflow-hidden focus:border-[#40a9ff]
                focus:bg-[#e6f7ff]"
              >
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {label}
                </span>
                <Close
                  onClick={onDelete}
                  fontSize="small"
                  className="text-lg cursor-pointer p-1"
                />
              </div>
            );
          })}
          <input
            {...getInputProps()}
            className="bg-[#fff] text-black opacity-80 h-[30px] box-border p-[4px 6px] w-0 min-w-[30px] flex-grow border-none m-0 outline-none"
          />
        </div>
      </div>
      {groupedOptions.length > 0 ? (
        <ul
          {...getListboxProps()}
          className="w-[300px] mt-[2px] mx-0 mb-0 p-0 absolute list-none bg-[#fff] overflow-auto max-h-[250px] rounded-[4px] shadow-2xl z-[1]"
        >
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={index}
              className="py-[5px] px-[12px] flex aria-selected:bg-[#fafafa] aria-selected:font-[600] hover:bg-[#e6f7ff] cursor-pointer hover:svg:text-[#1890ff]"
            >
              <span className="flex-grow">{option.title}</span>
              <Check
                fontSize="medium"
                className="text-transparent hover:text-[#1890ff]  "
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
