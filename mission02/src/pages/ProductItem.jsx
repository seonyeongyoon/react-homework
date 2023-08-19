import { getPbImageURL, numberWithComma } from '@/utils';

export default function ProductItem({ item }) {
  return (
    <li className='border-r border-b border-black'>
      <figure>
        <img
          src={getPbImageURL(item, 'photo')}
          className="h-96 w-auto border-b border-black"
          alt=""
        />
        <figcaption className='p-2'>
          <span className="title font-semibold block whitespace-nowrap text-ellipsis overflow-hidden">
            {item.title}
          </span>
          <span className="description block text-sm">{item.description}</span>
          <span className="price block text-right font-semibold">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  );
}