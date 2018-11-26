using System.Web.Optimization;

namespace PlanningPoker
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-signalR").Include("~/Scripts/jquery.signalR-2.4.0.min.js"));
        }
    }
}
