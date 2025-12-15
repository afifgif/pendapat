/**
 * Test script to verify asset URLs
 * This helps diagnose which assets are accessible
 */

export async function testAssetUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors', // Bypass CORS for testing
    })
    return true
  } catch (error) {
    return false
  }
}

export async function testAllAssets() {
  const { icons, images } = await import('./assets')
  
  console.log('Testing asset URLs...')
  
  const allAssets = [
    ...Object.entries(icons).map(([key, url]) => ({ type: 'icon', key, url })),
    ...Object.entries(images).map(([key, url]) => ({ type: 'image', key, url })),
  ]
  
  const results = await Promise.all(
    allAssets.map(async (asset) => {
      const accessible = await testAssetUrl(asset.url)
      return { ...asset, accessible }
    })
  )
  
  const accessible = results.filter(r => r.accessible)
  const broken = results.filter(r => !r.accessible)
  
  console.log(`\n✅ Accessible: ${accessible.length}/${results.length}`)
  console.log(`❌ Broken: ${broken.length}/${results.length}`)
  
  if (broken.length > 0) {
    console.log('\nBroken assets:')
    broken.forEach(asset => {
      console.log(`  - ${asset.type}.${asset.key}: ${asset.url}`)
    })
  }
  
  return { accessible, broken }
}










