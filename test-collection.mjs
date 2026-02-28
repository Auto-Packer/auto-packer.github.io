import { getCollection } from 'astro:content';

async function test() {
  try {
    const downloads = await getCollection('downloads');
    console.log(`Found ${downloads.length} downloads:`);
    downloads.forEach(d => console.log(`  - ${d.slug}: ${d.data.title}`));
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
