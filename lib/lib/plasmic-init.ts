import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "u6U8hzTjcpCEUh1epLpopo",  // ID of a project you are using
      token: "kKQatdtUOX2Qh20ih86DjpS2W7dFQHKvhcDFZ87QjSPWQplTfNJHmE9UJzhWuC70FUbPKHdkIUPCoQxd2sag"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
